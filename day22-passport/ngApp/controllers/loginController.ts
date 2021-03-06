namespace day22_passport.Controllers{
    export class LoginController{
        public loginInfo;
        constructor(private loginService: day22_passport.Services.LoginService,
                    private $state: ng.ui.IStateService
                ){

                }

        login(){
            this.loginService.login(this.loginInfo)
            .then(() =>{
                this.$state.go('home');
            })
            .catch(() =>{
                alert('login failed');
            });
        }
    }
}
