import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
    /* <component>內容</component>
        當內容以這種形式傳送時 { children } react預設組件
        會自動抓取夾在中間的內容，可以是文字、圖片、其他 component...等
    */

    return <button className="bg-blue-500 px-3 py-1.5 border border-blue-600 text-white ">{children}</button>;
}

// 注意:雖然引入時字首為大寫，但使用時要使用 camelCase
Button.propTypes = {
    checkVariationVale: ({ primary, secondary, success, warning, danger }) => {
        /* 由於我們把 primary={true} 簡寫，因此沒有使用時返回的是 undefined 不是 false
        為了計算 true 的次數使用 Number() ， true = 1, false = 0
        但 Number(undefined) 會返回 NaN , !!undefined = false, 而 !!true = true
        */
        const count =
            Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

        if (count > 1) {
            console.log(!undefined);
            return new Error('only one of primary, secondary, success, warning, danger');
        }
    },
};

export default Button;
