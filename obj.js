const books = [
    {
        tacGia: "Tran Thai Hien",
        tieuDe: "Sach 123",
        namXuatBan: 2021,
        trangThai: true
    }
    ,
    {
        tacGia: "Quang Luan",
        tieuDe: "Sach 456",
        namXuatBan: 2021,
        trangThai: true

    }
]
    for(let item in books){
        console.log(`Tac gia: ${books[item].tacGia} - tieu de: ${books[item].tieuDe} - nam xuat ban: ${books[item].namXuatBan} - trang thai: ${books[item].trangThai}`)
    }
    books.forEach((item) => {
        console.log(`Tac gia: ${item.tacGia} - tieu de: ${item.tieuDe} - nam xuat ban: ${item.namXuatBan} - trang thai: ${item.trangThai}`)
    })
    