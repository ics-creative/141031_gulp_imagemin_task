// gulpプラグインの読みこみ
var gulp = require("gulp");
// 画像を圧縮するプラグインの読み込み
var imagemin = require("gulp-imagemin");

//imagesフォルダー以下のファイルを監視し、変更があり次第imagesフォルダー以下の画像の圧縮を実行するタスク
gulp.task("watchTask", function () { // 「watchTask」という名前のタスクを登録
  gulp.watch("images/**", function () {    // imagesフォルダ以下のファイルを監視
    gulp.src("images/*.png")    // imagesフォルダ以下のpng画像を取得
      .pipe(imagemin())   // 画像の圧縮処理を実行
      .pipe(gulp.dest("minified_image")); // minified_imageフォルダ以下に保存
  });
});
