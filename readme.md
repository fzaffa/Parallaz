#Parallaz
Parallaz is the smallest javascript library for parallax scrolling.
Soon there will be a demo.
##Usage
There are three ways to make an element a Parallaz element. The first is to define the element in the constructor.
    var elm = new Parallaz(
    document.getElementById('yourID'), //element
    	5 //speed
    );
The second is to use a string representing the ID of an element
    var elm = new Parallaz(
    "myId", //element's ID.
    	5 //speed
    );
And the third, to instantiate multiple elements at time is to use a class name
    var elm = new Parallaz(
    "myClass", //Class name, every element with that class name will be a Parallaz element
    	5 //speed
    );

The images will be initially positioned to the bottom of the element, and scroll only when the element is visible, to prevent the image to disappear in the case it's far down the page. Make sure to use high enough images. 