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
  it('should have powersaving mode on by default', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });
  it('should be able to switch powerSavingMode off', function(){
    thermostat.switchPSM()
    expect(thermostat.powerSavingMode).toEqual(false)
  });
  it('should be able to switch powerSavingMode on', function(){
    thermostat.switchPSM()
    thermostat.switchPSM()
    expect(thermostat.powerSavingMode).toEqual(true)
  });
  it('if powerSavingMode is on, should not be able to raise temperature above 25', function(){
    for (i = 1; i <= 10; i++){
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25);
  });
  it('if powerSavingMode is off, should not be able to raise temperature above 32', function(){
    thermostat.switchPSM()
    for (i = 1; i <= 20; i++){
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(32);
  });
});
