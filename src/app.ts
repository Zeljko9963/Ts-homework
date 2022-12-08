/*enum ProjectStatus{Active , Finished}
class Projects{
  constructor
  (public id:string,
    public title:string,
    public description:string,
    public numofpeopel:number,
    public status:ProjectStatus
    ){}
}
type listener = (items:Projects[])=> void;
class ProjectState{
  private projects:Projects[] = [];
  private listeners:listener[] = [];
 private static instance:ProjectState;

 private constructor(){

 }

  static GetInstance(){
  if(this.instance){
    return this.instance;
  }
  this.instance = new ProjectState();
  return this.instance;
 }
 addListeners(listenerFN:listener){
  this.listeners.push(listenerFN);
 }
  addProjects(title:string,description:string,numofpeople:number){
    const newProjects = new Projects(Math.random().toString(),title,description,numofpeople,ProjectStatus.Active);
    this.projects.push(newProjects);
    for(const listenerFN of this.listeners){
      listenerFN(this.projects.slice());
    }
  }
}
const projectState = ProjectState.GetInstance();
// Validation Logic
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validateInput:Validatable){
  let isValid = true;
  if(validateInput.required){
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if(validateInput.minLength != null && typeof validateInput.value === "string" )
  {
    isValid = isValid && validateInput.value.length > validateInput.minLength;
  }
  if(validateInput.maxLength != null && typeof validateInput.value === "string" )
  {
    isValid = isValid && validateInput.value.length < validateInput.maxLength;
  }
  if(validateInput.min != null && typeof validateInput.value === "number"){
    isValid = isValid && validateInput.value > validateInput.min;
  }
  if(validateInput.max != null && typeof validateInput.value === "number"){
    isValid = isValid && validateInput.value < validateInput.max;
  }
  return isValid;
}

class ProjectList{
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProject: Projects[];
  constructor(private type: 'active'|'finished'){
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    this.assignedProject = [];
    const importedNode = document.importNode(this.templateElement.content,true );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;
    projectState.addListeners((project:Projects[])=>{
      const relevantProject = project.filter( prj =>{
         if(this.type === "active"){
          return  prj.status=== ProjectStatus.Active;
         }
         return prj.status === ProjectStatus.Finished;
      });
     this.assignedProject = relevantProject;
     this.renderProject();
   });
    this.renderContect();
   this.attach();
  }
private renderProject(){
  const lisetEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
  lisetEl.innerHTML = "";
  for (const prjItem of this.assignedProject){
    const listItem = document.createElement("ul");
    listItem.textContent = prjItem.title;
    lisetEl.appendChild(listItem);
  }
}
  
  private renderContect(){
   const listId = `${this.type}-projects-list`;
   this.element.querySelector("ul")!.id = listId;
   this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " PROJECTS";

  }
  private attach(){
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }

}


class ProjectInput {
  //def vrednost html elemenata
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputelement:HTMLInputElement;
    descriptionInputElement:HTMLInputElement;
    peopleInputElement:HTMLInputElement;
  //pozvali te elemente
    constructor() {
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
  //prosledili content tj formu koja se nalazila u templetu
      const importedNode = document.importNode(this.templateElement.content,true );
      //definisali formm el u html-u
      this.element = importedNode.firstElementChild as HTMLFormElement;
      //pozvali css pravilo
      this.element.id = "user-input";
      //pozvali ostale input elemente
      this.titleInputelement = this.element.querySelector("#title")! as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector("#description")! as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector("#people")! as HTMLInputElement;
//pozvali objekte
      this.configure();
      this.attach();
    }
//validacija 
    private getterUserInputs():[string , string , number]|void{
      const enteredTitle = this.titleInputelement.value;
      const destricptionTitle = this.descriptionInputElement.value;
      const peopleTitle = this.peopleInputElement.value;


      const titleValidation:Validatable = {
         value:enteredTitle,
         required:true,
      };


      const destricptionValidation:Validatable = {
        value:destricptionTitle,
        required:true,
        minLength: 5,
     };

     const peopleValidation:Validatable = {
      value:+peopleTitle,
      required:true,
      min:3,
      
   };
      if(//enteredTitle.trim().length===0 ||  destricptionTitle.trim().length===0 || peopleTitle.trim().length===0 */
      
       /* !validate(titleValidation)||
        !validate(destricptionValidation)||
        !validate(peopleValidation)
      
      
       ){
        alert("Invalid validation , please try agin!");
        return;
      }
      else{
        return [enteredTitle , destricptionTitle, +peopleTitle ];
      }
    }
//brisanj input polja nakon unosa
    private clearInputsElements(){
      this.titleInputelement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }
//dodali evente
    private sumbitHendler(event:Event){
     event.preventDefault();
     const UserInput = this.getterUserInputs();
     if(Array.isArray(UserInput)){
      const[title,description,peeople] = UserInput;
      projectState.addProjects(title ,description,peeople);
      //console.log(title,description,peeople);
      this.clearInputsElements();
     }
    }

    
    //dodali event listener na button
    private configure(){
      this.element.addEventListener("submit" , this.sumbitHendler.bind(this));
    }
    // da ispisujemo elemente iz forme
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
  }
  
  const prjInput = new ProjectInput();
  const projetclist1 = new ProjectList("active");
  const projetclist2 = new ProjectList("finished");
 
  */

  enum ProjectStatus{Active , Finished}
  class Project{
    constructor
    (public id:string,
      public title:string,
      public description:string,
      public numofpeopel:number,
      public status:ProjectStatus){

    }
  }
  type listener = (items:Project[])=> void;
  class ProjectState {
    private listeners: listener[] = [];
    private projects:Project[] = [];
    private static instance: ProjectState;
  
    private constructor() {}
  
    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }
  
    addListener(listenerFn: listener) {
      this.listeners.push(listenerFn);
    }
  
    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(Math.random().toString(),title,description,numOfPeople,ProjectStatus.Active)
      this.projects.push(newProject);
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }
  
  const loading = ProjectState.getInstance();
interface Validatable{
  value:string|number,
  requirder:boolean,
  minlenght?:number,
  maxlength?:number,
  min?:number,
  max?:number

}

function validate(validateInput:Validatable){
   let isValid = true;
  if(validateInput.requirder){
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if(typeof validateInput.value === "string" && validateInput.minlenght != null){
    isValid = isValid && validateInput.value.length > validateInput.minlenght;
  }
  if(typeof validateInput.value === "string" && validateInput.maxlength != null){
    isValid = isValid && validateInput.value.length < validateInput.maxlength;
  }
  if(typeof validateInput.value === "number" && validateInput.max != null){
    isValid = isValid && validateInput.value < validateInput.max;

    if(typeof validateInput.value === "number" && validateInput.min != null){
      isValid = isValid && validateInput.value < validateInput.min;
    }
  }
   return isValid;
}

class ProjectRender{
  template:HTMLTemplateElement;
  renderElement:HTMLDivElement;
  element:HTMLElement;
  projectholder:Project[];

  constructor(private type: 'active'|'finished'){
    this.template=document.querySelector("#project-list")! as HTMLTemplateElement;
    this.renderElement = document.querySelector("#app") ! as HTMLDivElement;
    this.projectholder = [];
    const importedNode = document.importNode(this.template.content , true);
   
    this.element = importedNode.firstElementChild! as HTMLElement;
   
    this.element.id = `${this.type}-projects`;
    loading.addListener((project: Project[])=>{
      const filterprj =project.filter(prj => {
        if(this.type === "active"){
          return  prj.status=== ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
     });
    
        
      this.projectholder = filterprj;
      this.renderProjects();
    });
    this.attach();
    this.renderContent();
   
  }
  

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    for (const prjItem of this.projectholder) {
      const listItem = document.createElement('li');
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem)
    }
  }

  
  private renderContent(){

    
    const elementt = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = elementt;
    this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " PROJECTS";
  }
  

  private attach(){
    this.renderElement.insertAdjacentElement("beforeend" , this.element );
  }
}
  class ProjectStart{
    template:HTMLTemplateElement;
    renderElement:HTMLDivElement;
    element:HTMLFormElement;
    title:HTMLInputElement;
    description:HTMLInputElement;
    people:HTMLInputElement
    constructor(){
      this.template=document.querySelector("#project-input")! as HTMLTemplateElement;
      this.renderElement = document.querySelector("#app") ! as HTMLDivElement;
      const importedNode = document.importNode(this.template.content , true);
      this.element = importedNode.firstElementChild! as  HTMLFormElement;
      this.element.id = "user-input";
      this.title = this.element.querySelector("#title")! as HTMLInputElement;
      this.description = this.element.querySelector("#description")! as HTMLInputElement;
      this.people =  this.element.querySelector("#people")! as HTMLInputElement;
      this.sumbitHendler();
      this.attach();
    }

     private GetInputElement():[string , string ,number]|void{
        const titleField = this.title.value;
        const descriptionField = this.description.value;
        const peopleField = this.people.value;


        const titleValidation:Validatable={
          value:titleField,
          requirder:true
        }

        const descriptionValidation:Validatable ={
          value:descriptionField,
          requirder:true,
          minlenght:2,
          maxlength:10
        }

        const peopleValidation:Validatable ={
          value:peopleField,
          requirder:true,
          min:1,
          max:5
        }
        if(
            !validate(titleValidation)||
            !validate(descriptionValidation)||
            !validate(peopleValidation)
        ){
      
          alert("somting went wrong");
          return;
     }
        else{
        return [titleField , descriptionField , +peopleField];
      }
     }
       
     
      private clearInputs() {
        this.title.value = '';
        this.description.value = '';
        this.people.value = '';
      }
     
    private eventt(event: Event) {
      event.preventDefault();
      const userInput = this.GetInputElement();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        loading.addProject(title, desc, people);
        this.clearInputs();
      }
    }

  private sumbitHendler(){
      this.element.addEventListener("submit" ,this.eventt.bind(this));
   } 

   private attach(){
      this.renderElement.insertAdjacentElement("afterbegin" , this.element);
  }
  }



  const project = new ProjectStart();
  const projecat1 = new ProjectRender("active");
  const projecat2 = new ProjectRender("finished");