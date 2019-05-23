import React, {Component, Fragment} from 'react';

const MyName = ({name,pertice}) => {
    return (
        <Fragment>
            <div>나는 {name}입니다.</div>
            <div>나는 {pertice}입니다.</div>
        </Fragment>
    );

};
export default MyName;