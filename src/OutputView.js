const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printSrartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ upperRow, lowerRow }) {
    const upperRowString = this.mapListToString(upperRow);
    const lowerRowString = this.mapListToString(lowerRow);
    Console.print(upperRowString);
    Console.print(lowerRowString);
  },

  mapListToString(mapList) {
    let mapString = '[';
    mapList.forEach((mark) => {
      mapString += ` ${mark} |`;
    });
    mapString = `${mapString.slice(0, -1)}]`;
    return mapString;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ upperRow, lowerRow }, { isSuccess, numberOfAttempts }) {
    Console.print('최종 게임 결과');
    this.printMap({ upperRow, lowerRow });
    Console.print('');
    Console.print(`게임 성공 여부: ${isSuccess}`);
    Console.print(`총 시도한 횟수: ${numberOfAttempts}`);
  },
};

module.exports = OutputView;
