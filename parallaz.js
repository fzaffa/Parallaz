var Parallaz = function Parallaz(element, speed)
{
	element: element;
	speed: speed;

	function calculateCoords()
	{
		return document.body.scrollTop / speed;
	}

	window.addEventListener("scroll", function()
	{

		element.style.backgroundPosition = "center 	" + -calculateCoords() + "px";
	})
}