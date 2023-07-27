const students =[
    {id:1,name:'parsa',family:'parva'},
    {id:2,name:'ahmad',family:'shahi'},
    {id:3,name:'adib',family:'karimi'},
    {id:4,name:'saro',family:'rahmani'},
    {id:5,name:'aryan',family:'faraji'},
    {id:6,name:'mobin',family:'ghasemi'},
    {id:7,name:'omid',family:'bakeri'},
    {id:8,name:'ahmad',family:'dori'},
    {id:9,name:'amir',family:'parna'},
    {id:10,name:'ali',family:'afroozi'},
    {id:11,name:'alireza',family:'gholami'},
    {id:12,name:'hanie',family:'bayezgoli'}
]
const pages = document.querySelectorAll('.page')
const amount = students.length
console.log(amount)
const box = document.getElementById('students')

pages.forEach(function(page)
{
    page.addEventListener('click',function(event)
    {
      const pnum = Number(event.target.innerHTML)
      if(pnum == 1)
      {
        box.innerHTML=''
        for(i = 0; i<3 ;i++)
        {
            const div = document.createElement('div')
            div.className ='card'
            const div2 = document.createElement('div')
            div2.className = 'card-body student'
            div.append(div2)
            var obj = students[i]
            div2.append(obj.name + ' ' +obj.family)
            box.append(div)
        }
      }
      else if(pnum == 2)
      {
        box.innerHTML = ""
        for(i = 3;i < 6;i++ )
        {
            
            const div = document.createElement('div')
            div.className ='card'
            const div2 = document.createElement('div')
            div2.className = 'card-body student'
            div.append(div2)
            var obj = students[i]
            div2.append(obj.name + ' ' +obj.family)
            box.append(div)
        }
      }
      else if(pnum == 3)
      { 
        box.innerHTML = ""
        for(i = 6; i < 9;i++){
        const div = document.createElement('div')
        div.className ='card'
        const div2 = document.createElement('div')
        div2.className = 'card-body student'
        div.append(div2)
        var obj = students[i]
        div2.append(obj.name + ' ' +obj.family)
        box.append(div)
        }
      }
      else
      {
        box.innerHTML = ""
        for(i = 9; i < students.length;i++)
        {
            const div = document.createElement('div')
            div.className ='card'
            const div2 = document.createElement('div')
            div2.className = 'card-body student'
            div.append(div2)
            var obj = students[i]
            div2.append(obj.name + ' ' +obj.family)
            box.append(div)
        }
      }
    })
})