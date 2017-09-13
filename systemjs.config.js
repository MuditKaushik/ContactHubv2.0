(function (global) {
    function GetPkgs() {
        var mapPkg = {};
        var pkgs = [
            'rxjs',
            'common',
            'compiler',
            'core',
            'forms',
            'http',
            'platform-browser',
            'platform-browser-dynamic',
            'router',
            '@ng-bootstrap/ng-bootstrap',
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
                default:
                    mapPkg[pkg] = 'node_modules/@angular/' + pkg + '/bundles/' + pkg + '.umd.min.js'
                    break;
            }
        });
        console.log(mapPkg);
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