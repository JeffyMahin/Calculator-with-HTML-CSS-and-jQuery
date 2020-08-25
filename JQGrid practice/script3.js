$("#js").jqGrid({
    colModel: [
        {name: "firstName", align: "center"},
        {name: "lastName", align: "center"}
    ],
    data: [
        {id: 1, firstName: "Jeffy", lastName: "Mahin"},
        {id: 2, firstName: "Deepika", lastName: "Padukon"}
    ],
    caption: "My external JQGrid table",
    rownumbers: true,
});