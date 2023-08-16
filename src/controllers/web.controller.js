exports.home = (req,res)=>{
    var abc = "T2207A";
    var students = [
        "Phung Van A",
        "Trinh Van B",
        "Nguyen Van C"
    ];
    res.render("home",{
        className : abc,
        students : students
    });
}

exports.about = (req,res)=>{
    var xyz = "Us";
    res.render("about",{
        classInfor : xyz

    });
}

