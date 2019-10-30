var table;
var urlUsers = "http://jsonplaceholder.typicode.com/users";

function initTableData() {
    /*var data = [
        {
            "id": 2,
            "name": "Đào Như Anh",
            "email": "chopperlouis@gmail.com",
            "address": "Kiến Xương",
            "phone": "0359813619",
        },
        {
            "id": 3,
            "name": "Nguyễn Minh Quân",
            "email": "chopperlouis@gmail.com",
            "address": "Hà Nội",
            "phone": "0359813619",
        },
        {
            "id": 4,
            "name": "Đào Như Anh",
            "email": "chopperlouis@gmail.com",
            "address": "Kiến Xương",
            "phone": "0359813619",
        },
    ];
     */
    $.get(urlUsers, function (responseData) {
        var modifiedUsers = responseData.map(eachUser => {
            return {
                id: eachUser.id,
                name: eachUser.name,
                email: eachUser.email,
                address: `${eachUser.address.street}, ${eachUser.address.suite}, ${eachUser.address.city}`,
                phone: eachUser.phone
            };
        });
        table = $('#users').DataTable({
            "processing": true,
            data: modifiedUsers,
            columns: [
                {data: 'id'},
                {data: 'name'},
                {data: 'email'},
                {data: 'address'},
                {data: 'phone'},
            ]
        }).fail(function () {
            alert("Cannot get data from URL");
        });
    });
}

$(document).ready(function () {
    initTableData();
    $("#list-header").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
    });
    $("#btnReload").on("click", function () {
        alert("Reload ...");
        table.ajax.reload();
    });
});
