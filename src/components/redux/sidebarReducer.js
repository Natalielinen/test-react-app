let initialState = {
    friends: [
        {
            id: 1,
            name: "Гарик",
            img: "https://cache3.youla.io/files/images/780_780/5b/fb/5bfba5e45eaa9e41107f0045.jpg"
        },
        {
            id: 2,
            name: "Белка",
            img: "https://sun9-35.userapi.com/c849220/v849220200/14151b/qJ2hcpXCH4k.jpg?ava=1"
        },
        {id: 3, name: "Василий", img: "https://pona1.ru/storage/items/48857ff41b25099018d6b1c2dbcbf37a_200.jpg"}
    ]
}

const sidebarReducer = (state = initialState,action) => {
    return state;
}

export default sidebarReducer;