const range = (start, end, step = start > end ? -1 : 1) => {
    // 인자가 하나만 주어진 경우: end는 start가 됨, start는 1 또는 음수
    if (end === undefined) {
        if (start === 0) {
            return [0];
        }
        end = start < 0 ? -1 : start;
        start = start < 0 ? start : 1; // 음수일 경우 그대로 사용하고, 양수일 경우 1부터 시작
    }

    // step이 0인 경우: 무한 루프 방지 위해 [start]만 반환
    if (step === 0) {
        return [start];
    }

    const result = [];

    // 소수점 처리를 위한 precision 설정
    const precision = Math.max(
        (step.toString().split('.')[1] || '').length,
        (start.toString().split('.')[1] || '').length,
        (end.toString().split('.')[1] || '').length
    );

    // 정밀도를 가진 step, start, end를 위한 수치
    const x = Math.pow(10, precision);
    start = Math.round(start * x);
    end = Math.round(end * x);
    step = Math.round(step * x);

    // step이 양수일 때
    if (step > 0) {
        if (start <= end) {
            for (let i = start; i <= end; i += step) {
                // 결과를 원하는 precision으로 반올림
                result.push(parseFloat((i / x).toFixed(precision)));
            }
        }
    } 
    // step이 음수일 때
    else {
        if (start >= end) {
            for (let i = start; i >= end; i += step) {
                // 결과를 원하는 precision으로 반올림
                result.push(parseFloat((i / x).toFixed(precision)));
            }
        }
    }

    return result;
};

module.exports = { range };
