// 今日の日付を取得
const dateName = new Date();

const date = () => {
    // 年・月・日を取得
    var year = dateName.getFullYear();
    var month = dateName.getMonth() + 1;// 月は0から始まるため、1を加えて補正
    var day = dateName.getDate();

    console.log(year + '年' + month + '月' + day + '日');
}

date();