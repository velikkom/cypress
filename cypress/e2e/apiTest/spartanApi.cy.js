describe("Spartan API Test", { baseUrl: "http://3.234.251.163:8000" }, function() {

  it.skip("Get single Spartan", function() {
    cy.request("GET", "/api/spartans/100").then(function(response) {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Terence");
    });
  });
  it("Post request Test", function() {
    cy.request({
      method:'POST',
      url:'/api/spartans',
      body:{
        "gender":"Female",
        "name":"Halime",
        "phone":2345234522
      }
        }).then(function(response){
        expect(response.status).to.equal(201);
        expect(response.body.success).to.eq('A Spartan is Born!');
        expect(response.body.data.name).to.eq('Halime');

    })
  });
});