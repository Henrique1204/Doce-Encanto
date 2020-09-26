const gulp = require("gulp");
const sass = require("gulp-sass");

function compilarSass() {
    /*
    .src -- é pra definir o caminho onde tu vai pegar os arquivos
    .pipe(sass()) -- é pra ativar o sass e processar os arquivos
    sass({outputstyle: "compressed"}) -- compressa o arquivo
    autroprefixer(...) -- Implementação padrão da biblioteca
    .pipe(gulp.dest()) -- é pra definir onde os arquivos processados vão
    browserSync.stream() -- faz o navegador recarregar quando alterar o sass
    */
    return gulp.src("css/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("css/"));
}

gulp.task("sass", compilarSass);

function watch() {
    /*
    watch(caminha, exe)
    caminho  -- O caminho dos arquivos que é pra ser observados.
    exe -- O que é pra ser executado, só pode uma função, porém várias tarefas.
    gulp.series -- executa em série.
    gulp.parallel -- executa paralelamente.
    */
    
    gulp.watch("css/scss/**/*.scss", compilarSass);
}

gulp.task("default", watch);