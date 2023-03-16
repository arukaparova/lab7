
    const element = document.getElementById("demo");
    element.remove();

    let h1 = document.createElement("h1");
    h1.innerText = "Lab7 Assignment";
    h1.style.color = "blue";
    document.body.appendChild(h1);

    hr = document.createElement ("hr");
    hr.style.borderColor = "black";
    hr.style.borderWidth = "0.5px"; 
    document.body.appendChild(hr);

    let h2 = document.createElement("h2");
    h2.innerText = "Task";
    h2.style.color = "red";
    document.body.appendChild(h2);

    let p1 = document.createElement("p1");
    p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
    p1.style.color = "black";
    document.body.appendChild(p1);

    let li1 = document.createElement("li");
    li1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
    li1.classList.add("odd");

    let li2 = document.createElement("li");
    li2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
    li2.classList.add("even");

    let li3 = document.createElement("li");
    li3.innerHTML = "change content of the elements (<b>5 points</b>);";
    li3.classList.add("odd");

    let li4 = document.createElement("li");
    li4.innerHTML = "change styles of the elements (<b>5 points</b>);";
    li4.classList.add("even");

    let li5 = document.createElement("li");
    li5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
    li5.classList.add("odd");

    let li6 = document.createElement("li");
    li6.innerHTML = "change classes of the elements (<b>5 points</b>).";
    li6.classList.add("even");

    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)
    
    hr = document.createElement ("hr");
    hr.style.borderColor = "black";
    hr.style.borderWidth = "0.5px"; 
    document.body.appendChild(hr);

    let h22 = document.createElement("h2");
    h22.innerText = "Submission";
    h22.style.color = "red";
    document.body.appendChild(h22);

    let p11 = document.createElement("p1");
    p11.innerHTML = "To submit your work, follow these instructions:";
    p11.style.color = "black";
    document.body.appendChild(p11);

    let li11 = document.createElement("li");
    li11.innerHTML = "Create a new repository on Github, named <b>lab7 (1 point)</b>.";
    li11.classList.add("odd");

    let li21 = document.createElement("li");
    li21.innerHTML = "Clone this repository to your local machine and work inside it.";
    li21.classList.add("even");

    let li31 = document.createElement("li");
    li31.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with  &quot;Hello, World!&quot; message (<b>1 point</b>).";
    li31.classList.add("odd");

    let li41 = document.createElement("li");
    li41.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point)</b>.";
    li41.classList.add("even");

    let li51 = document.createElement("li");
    li51.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
    li51.classList.add("odd");

    let li61 = document.createElement("li");
    li61.innerHTML = "Write a JavaScript program in <b>main.js</b>  to make your <b>index.html</b>  look identical to this HTML file <b>(5 points)</b>.";
    li61.classList.add("even");

    let li71 = document.createElement("li");
    li71.innerHTML = "After you finish your work, submit it to the Github <b>(2 points)</b>.";
    li71.classList.add("odd");

    let ul1 = document.createElement("ul");
    document.body.appendChild(ul1);
    ul1.appendChild(li11)
    ul1.appendChild(li21)
    ul1.appendChild(li31)
    ul1.appendChild(li41)
    ul1.appendChild(li51)
    ul1.appendChild(li61)  
    ul1.appendChild(li71)        

    hr = document.createElement ("hr");
    hr.style.borderColor = "black";
    hr.style.borderWidth = "0.5px"; 
    document.body.appendChild(hr);

    console.log(document);