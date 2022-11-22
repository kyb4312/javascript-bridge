/* eslint max-lines-per-function: 0 */
const BridgeGame = require('../src/Game/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeGameController = require('../src/Game/BridgeGameController');

describe('setBridge 함수 호출 검사', () => {
  test('Bridgemaker 객체의 makeBridge 함수를 호출하여 다리를 만든다.', () => {
    const spyGet = jest.spyOn(BridgeMaker, 'makeBridge');
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.setBridge(3);
    expect(spyGet).toBeCalledTimes(1);
  });
});

describe('updateStatus 함수 호출 검사', () => {
  const bridgeGame = new BridgeGame(['U', 'D', 'D']);
  const spyGet = jest.spyOn(bridgeGame, 'checkSuccess');

  test('사용자가 선택한 칸이 correct하지 않다면 checkSuccess() 함수를 호출하지 않는다.', () => {
    const correct = false;
    bridgeGame.updateStatus(correct);
    expect(spyGet).toBeCalledTimes(0);
  });

  test('사용자가 선택한 칸이 correct하다면 checkSuccess() 함수를 호출하여 게임 성공 여부를 확인한다.', () => {
    const correct = true;
    bridgeGame.updateStatus(correct);
    expect(spyGet).toBeCalledTimes(1);
  });
});
