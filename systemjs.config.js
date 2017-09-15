(function (global) {
    function GetPkgs() {
        var mapPkg = {};
        var pkgs = [
            'rxjs',
            '@ng-bootstrap/ng-bootstrap',
            'ng2-ckeditor',
            'common',
            'compiler',
            'core',
            'forms',
            'http',
            'platform-browser',
            'platform-browser-dynamic',
            'router',
            'app'
        ];
        pkgs.map(function (pkg, pos) {
            switch (pkg) {
                case 'app':
                    mapPkg[pkg] = pkg;
                    break;
                case '@ng-bootstrap/ng-bootstrap':
                    mapPkg[pkg] = 'node_modules/'.concat(pkg).concat('/bundles/ng-bootstrap.js');
                    break;
                case 'rxjs':
                    mapPkg[pkg] = 'node_modules/'.concat(pkg);
                    break;
                case 'ng2-ckeditor':
                    mapPkg[pkg] = 'node_modules/'.concat(pkg).concat('/lib/index.js');
                    break;
                default:
                    mapPkg['@angular/'.concat(pkg)] = 'node_modules/@angular/' + pkg + '/bundles/' + pkg + '.umd.min.js'
                    break;
            }
        });
        return mapPkg;
    }
    SystemJS.config({
        paths: {
            "npm:": "node_modules/"
        },
        map: GetPkgs(),
        packages: {
            "app": {
                main: "./main.js",
                defaultExtension: "js"
            },
            "rxjs": {
                defaultExtension: "js"
            }
        }
    });
})(this);