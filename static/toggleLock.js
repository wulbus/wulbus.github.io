document.querySelectorAll('.toggle-lock').forEach(button => {
    // selects all elements in document of class toggle-lock, returns node list
    // then iterates using forEach method, executes code in {} for each
    // button is the arbitrary name we've given "current item" while it iterates
    button.addEventListener('click', function(event) {
        // assigns listener to each toggle-lock in node list
        // we add "click" as the event being listened for in function(event), the event handler function
      const toggleIcon = this.querySelector('.toggle-icon');
        // "this" refers to button being clicked
        // this.querySelector('.toggle-icon') returns span element containing the icon
      toggleIcon.classList.toggle('fa-unlock');
        // toggles presence of class fa-unlock on toggle-icon element
        // classList is a property that represents all CSS classes applied to an element
        // toggle is a method of the classList property, allows you to toggle presence of a class name for the element
      toggleIcon.classList.toggle('fa-lock');
        // & vice versa
        const iconBox = this;
        iconBox.classList.toggle('active');
          // lets us add css styling to the box the icon is contained in when active
    });
  });
