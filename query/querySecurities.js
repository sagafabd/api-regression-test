export const getEvent = () => ({
    query: {
        events: {
                _id: true,
                title: true,
                description: true,
                price: true,
                date: true
        }
    }
})

export const seedInsertEvent = (eventInput) => ({
    mutation: {
        createEvent: {  
            __args: eventInput,
            _id: true,
                title: true,
                description: true,
                price: true,
                date: true
            }  
    }
})

