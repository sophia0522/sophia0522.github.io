export default {
    props:{
        person:{
            type: Object,
            default:{
                name:'進擊的巨人',
                age:10
            }
        }
    },
    data:() =>({}),
    template:
    `<div class="box">
    <h1>{{person.name}}</h1>
    <p>{{person.age}}</p>
    </div>`
    
}