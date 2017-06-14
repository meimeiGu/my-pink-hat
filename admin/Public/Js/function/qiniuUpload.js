/*global Qiniu */
/*global plupload */
/*global FileProgress */
/*global hljs */


$(function() {
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'add-product-image',
        container: 'upload-img-list',
        drop_element: 'upload-img-list',
        max_file_size: '10mb',
        flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
        dragdrop: true,
        chunk_size: '4mb',
        multi_selection: !(mOxie.Env.OS.toLowerCase()==="ios"),
        uptoken_url: '../../qiniu/uptoken.php',

        domain: 'http://7ximr5.com1.z0.glb.clouddn.com/',
        get_new_uptoken: false,

        auto_start: true,
       // log_level: 5,
        init: {
                'FilesAdded': function (up, files) {
                    var file = files[0];
                    var isOri = "";
                    EXIF.getData(file.getNative(), function() {
                        var orientation = file.getNative().exifdata.Orientation;
                        if(orientation && orientation>1){
                            if(orientation==3){
                                isOri = "rotate-img2";
                            }else if(orientation == 6){
                                isOri = "rotate-img";
                            }
                        }
                    });
                    var $item = $('<li onclick="test(\''+file.id+'\')"><img id="'+file.id+'" src="" class="image '+isOri+'"/><a href="javascript:;" class="icon-del hide"></a><div class="processbar" id="pro' + file.id + '" style="width:0%;"></div></li>');
                    $("#add-product-image").closest("li").before($item);
                    if ($(".upload-img-list").children("li").size() == 5) {
                        $("#add-product-image").closest("li").addClass("hide");
                        $(".moxie-shim").addClass("hide");
                    };
                    $(".moxie-shim").css({left:$("#add-product-image").closest("li").position().left+15,top:$("#add-product-image").closest("li").position().top+15});
                    !function(){
                        previewImage(file,function(imgsrc){
                            $("#"+file.id).attr("src",imgsrc);
                        })
                    }();
                },
                'UploadProgress': function (up, file) {
                    $("#pro" + file.id).css("width", file.percent+"%");
                },
                'FileUploaded': function (up, file, info) {
                    $("#pro" + file.id).addClass("hide");
                    $("#" + file.id).prev(".img-cover").addClass("hide");
                    $("#" + file.id).next("a").removeClass("hide");
                    $("#"+file.id).attr("url",$.parseJSON(info).key);
                },
                'Error': function (up, err, errTip) {
                    if (err.code == -600) {
                        alert("图片超大，请调小相机分辨率");
                    } else if (err.code == -601) {
                        alert("图片格式不对哦");
                    } else if (err.code == -200) {
                        alert("您长时间没操作，请退出后重新进来");
                    } else {
                        alert(err.code + ": " + err.message);
                    }
                    up.removeFile(err.file.id);
                    $("#"+err.file.id).closest("li").remove();
                    if($("#"+err.file.id).closest("li").index()==3){
                        $("#add-product-image").closest("li").removeClass("hide");
                        $(".moxie-shim").removeClass("hide");
                    }
                    $(".moxie-shim").css({left:$("#add-product-image").closest("li").position().left+15,top:$("#add-product-image").closest("li").position().top+15});
                },
                'Key': function (up, file) {
                    var ran=Math.round(Math.random()*99);
                    var key = "Phone" +ran+"_"+ new Date().getTime() + "_" + file.id;
                    return key
                }
            }
    });
    setTimeout(function(){
        $(".moxie-shim").children("input").attr("capture","camera").attr("accept","image/*").removeAttr("multiple");
    },500);
}).on("click",".icon-del",function(){
        $(this).parent("li").remove();
        if($("#add-product-image").closest("li").hasClass("hide")){
            $("#add-product-image").closest("li").removeClass("hide");
            $(".moxie-shim").removeClass("hide");
        }
        $(".moxie-shim").css({width:$("#add-product-image").width(),height:$("#add-product-image").width(),left:$("#add-product-image").closest("li").position().left+15,top:$("#add-product-image").closest("li").position().top+15});//调整按钮的位置
    });

function previewImage(file, callback) {
        if (!file || !/image\//.test(file.type)) return; 
        if (file.type == 'image/gif') {
            var fr = new mOxie.FileReader();
            fr.onload = function () {
                callback(fr.result);
                fr.destroy();
                fr = null;
            }
            fr.readAsDataURL(file.getSource());
        } else {
            var preloader = new mOxie.Image();
            preloader.onload = function () {
                preloader.downsize(140, 140, true);
                var imgsrc = preloader.type == 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 70) : preloader.getAsDataURL(); 
                callback && callback(imgsrc); 
                preloader.destroy();
                preloader = null;
            };
            preloader.load(file.getSource());
        }
    }
