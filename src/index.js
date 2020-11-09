import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import { image, name, date, lorem } from 'faker';

const NUM_COMMENTS = 3;
const App = () => {
    return (
        <div className="ui container comments">
            {[...Array(NUM_COMMENTS)].map(() => (
                <CommentDetail
                    avatar={image.avatar()}
                    author={name.firstName()}
                    date={date.past().toDateString()}
                    text={lorem.sentence()}
                />
            ))}
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
