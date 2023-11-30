export function createReadSvg1() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "25");
    svg.setAttribute("height", "25");
    svg.setAttribute("fill", "green");
    svg.setAttribute("aria-labelledby", "readSvg1Title");
  
    let title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.setAttribute("id", "readSvg1Title");
    title.textContent = "Check Mark";
    svg.appendChild(title);
  
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
        "d",
        "M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z",
    );
    svg.appendChild(path);
  
    return svg;
  }
  
export function createReadSvg2() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "25");
    svg.setAttribute("height", "25");
    svg.setAttribute("fill", "red");
    svg.setAttribute("aria-labelledby", "readSvg2Title");
  
    let title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.setAttribute("id", "readSvg2Title");
    title.textContent = "Close Outline";
    svg.appendChild(title);
  
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
        "d",
        "M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z",
    );
    svg.appendChild(path);
  
    return svg;
}
  
export function createDeleteSvg() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "25");
    svg.setAttribute("height", "25");
    svg.setAttribute("fill", "red");
    svg.setAttribute("aria-labelledby", "deleteSvgTitle");
  
    let title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.setAttribute("id", "deleteSvgTitle");
    title.textContent = "Trash Can Outline";
    svg.appendChild(title);
  
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
        "d",
        "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z",
    );
    svg.appendChild(path);
  
    return svg;
}