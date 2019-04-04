describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('should have a starting temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('.up', function(){
    it('should increase temperature by 1', function(){
      expect(thermostat.up()).toEqual(21);
    })
  })
  describe('.down', function(){
    it('should decrease temperature by 1', function(){
      expect(thermostat.down()).toEqual(19);
    })
  })
  it('should not allow temperature to go below 10', function(){
    for (i = 1; i <= 20; i++){
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  })
});
