gdjs._28961_21517_12398_12471_12540_12531Code = {};
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects2= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects2= [];

gdjs._28961_21517_12398_12471_12540_12531Code.conditionTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition1IsTrue_0 = {val:false};


gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDTankBullet1Objects1Objects = Hashtable.newFrom({"TankBullet1": gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects1});
gdjs._28961_21517_12398_12471_12540_12531Code.eventsList0 = function(runtimeScene) {

{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FireRate") >= 0.4;
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DinoDoux"), gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1);
gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDTankBullet1Objects1Objects, (( gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1.length === 0 ) ? 0 :gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1[0].getCenterXInScene()), (( gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1.length === 0 ) ? 0 :gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 300, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


};

gdjs._28961_21517_12398_12471_12540_12531Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoDouxObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDTankBullet1Objects2.length = 0;

gdjs._28961_21517_12398_12471_12540_12531Code.eventsList0(runtimeScene);

return;

}

gdjs['_28961_21517_12398_12471_12540_12531Code'] = gdjs._28961_21517_12398_12471_12540_12531Code;
