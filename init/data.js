const sampleStudents = [
    {
        image : "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John",
        last_name: "Doe",
        DOB: 15/07/2000,
        father_name: "Robert Doe",
        mother_name: "Mary Doe",
        s_phone: 1885551234,
        p_phone: 1675555678
    },
    {
        image : "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Alice",
        last_name: "Smith",
        DOB: 12-12-2022,
        father_name: "John Smith",
        mother_name: "Linda Smith",
        s_phone: 1995558765,
        p_phone: 1875554321
    },
    {
        image : "https://plus.unsplash.com/premium_photo-1663089667998-77622508cd27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "Michael",
        last_name: "Johnson",
        DOB: 1978-08-30,
        father_name: "William Johnson",
        mother_name: "Patricia Johnson",
        s_phone: 1225551122,
        p_phone: 1345553344
    },
    {
        image : "https://images.unsplash.com/photo-1630178836733-3d61d8974258?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Emily",
        last_name: "Brown",
        DOB: 1992-03-04,
        father_name: "James Brown",
        mother_name: "Jessica Brown",
        s_phone: 1445555566,
        p_phone: 1515557788
    },
    {
        image : "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Daniel",
        last_name: "Williams",
        DOB: 1980-11-11,
        father_name: "George Williams",
        mother_name: "Sandra Williams",
        s_phone: 1335552233,
        p_phone: 1005554455
    },
    {
        image : "https://plus.unsplash.com/premium_photo-1681248156367-d95876bf885d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "Sophia",
        last_name: "Jones",
        DOB: 1995-06-07,
        father_name: "Robert Jones",
        mother_name: "Nancy Jones",
        s_phone: 1665553344,
        p_phone: 1765555566
    },
    {
        image : "https://plus.unsplash.com/premium_photo-1664461662789-b72903263bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "Ethan",
        last_name: "Garcia",
        DOB: 1988-10-10,
        father_name: "Carlos Garcia",
        mother_name: "Maria Garcia",
        s_phone: 1555-7788,
        p_phone: 1785559900
    },
    {
        image : "https://images.unsplash.com/photo-1514355315815-2b64b0216b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "Olivia",
        last_name: "Martinez",
        DOB: 1991-09-19,
        father_name: "Luis Martinez",
        mother_name: "Sophia Martinez",
        s_phone: 1905554455,
        p_phone: 1115556677
    },
    {
        image : "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "James",
        last_name: "Hernandez",
        DOB: 1983-04-12,
        father_name: "Michael Hernandez",
        mother_name: "Laura Hernandez",
        s_phone: 1675559988,
        p_phone: 1455557766
    },
    {
        image : "https://images.unsplash.com/photo-1461039088886-b5c863279a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "Ava",
        last_name: "Lopez",
        DOB: 1996-07-27,
        father_name: "David Lopez",
        mother_name: "Emma Lopez",
        s_phone: 1455552233,
        p_phone: 1235558899
    },
    {
        image : "https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
        name: "Benjamin",
        last_name: "Wilson",
        DOB: 1989-01-05,
        father_name: "Thomas Wilson",
        mother_name: "Jennifer Wilson",
        s_phone: 1255544553,
        p_phone: 1335551122
    },
];

module.exports = {data : sampleStudents};
