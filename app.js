function getPictures(count) {
    const pictures =[];

    for (let i = 0; i < count; i++) {
        pictures.push({
            id:1,
            url:'./photos/l.jpg',
            description: 'бу бу бу',
            like: 15,
            Comments: []
        })
    }
    return pictures
}
console.log(getPictures(5))

function getComments(count) {
    const Comments=[]
    for (let i = 0; i < count; i++) {
        Comments.push({
            id:2,
            message: [],
            user:"jonn"
        })
    }
    return Comments
}
console.log(getComments(6))

function getUser(count) {
    const user=[]
    for (let i = 0; i < count; i++) {
        user.push({
            name:"Jonn",
            avatar:"./foto/l.jpg"
        })
    }
    return user
}
console.log(getUser(6))