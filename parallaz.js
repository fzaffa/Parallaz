var Parallaz = function Parallaz(element, speed)
{
	if(typeof(element)==="object")
	{
		element: element;
	} else if(typeof(element)==="string")
	{
		if(document.getElementById(element))
		{
			return new Parallaz(document.getElementById(element), speed);
		}
		else
		{
			var p = [];
			for (var i = document.getElementsByClassName(element).length - 1; i >= 0; i--) {
				p.push(new Parallaz(document.getElementsByClassName(element)[i], speed));
			}
			return p;
		}
	}
	speed: speed;
	var orig;
	(function()
		{
			
			imgsrc = getComputedStyle(element).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
			var img = new Image();
			img.src = imgsrc;
			img.onload = function()
			{
				var base = element.offsetTop + element.clientHeight;
				var y = base - img.height;
				element.style.backgroundPosition = "center "+y+"px";
				orig = y;
			}
			delete img;
		})();

	function isVisible()
	{
		var size, position, scroll;
		size = window.innerHeight;
		position = element.offsetTop;
		scroll = document.body.scrollTop;

		return (position < (size + scroll));
	}	
	function calculatePosition () {
		return orig - (document.body.scrollTop / speed);
	}
	window.addEventListener("scroll", function()
	{
		if(isVisible()){ 
			element.style.backgroundPosition = "center "+calculatePosition()+"px";
		}

	})
}