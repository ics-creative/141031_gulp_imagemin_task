// gulpプラグインの読みこみ
var gulp = require("gulp");
// 画像を圧縮するプラグインの読み込み
var imagemin = require("gulp-imagemin");

// imagesフォルダー以下のpng画像を圧縮してminified_imageフォルダに保存するタスクの定義
gulp.task("imageMinTask", function () {  // 「imageMinTask」という名前のタスクを登録
  gulp.src("images/*.png")    // imagesフォルダ以下のpng画像を取得
    .pipe(imagemin())   // 画像の圧縮処理を実行
    .pipe(gulp.dest("minified_image/"));    // minified_imageフォルダ以下に保存
});