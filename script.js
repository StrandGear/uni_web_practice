//data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
//var mydata = JSON.parse(data);
//alert(mydata[0].name);

//TEST section
var questionContainers = document.getElementsByClassName("questionContainer") ;
var radioNum = -1;

for (let i = 1; i<questionContainers.length; i++)
{
    questionContainers[i].style.display = "none";
}
/*
function radioClicked()
{
    if(i < questionContainers.length)
    { 
        i++;
        questionContainers[i].style.display = "block";
    }
}

for (let i = 1; i < questionContainers.length; i++)
{
    var radios = questionContainers[i].querySelectorAll('input[type=radio]');
    for (let j = 0; j <  radios.length; j++)
    {
        if (radios[j].checked = true)
        {
        //questionContainers[i+1].style.display = "block";
        //console.log("checked")
        
        }
    }
};
*/
function radioClicked(num)
{
    if(num != radioNum)
    {
        radioNum = num;
        questionContainers[num+1].style.display = "block";
    }
}
