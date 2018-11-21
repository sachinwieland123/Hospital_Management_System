var adminDashboardPage = function(){

    this.adminDasboardText = function(){
        element(by.xpath("/html/body/div[1]/div[2]/h3")).getText().then(function(text){
            console.log('Proof for successfull login :' + text);
            expect(text).toEqual('Admin Dashboard');

        })
};

};

module.exports = new adminDashboardPage();