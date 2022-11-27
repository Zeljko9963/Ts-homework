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
//dodali evente
    private sumbitHendler(event:Event){
     event.preventDefault();
     console.log(this.titleInputelement.value);
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

  
  
  
  
  
  const Nikola = document.querySelector("#project-input")! as HTMLTemplateElement;
  
  
  
  
  
  
  
  
  
  
  