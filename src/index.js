import React from 'react';
import ReactDom from 'react-dom';
import { image, name, date, lorem } from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const NUM_COMMENTS = 3;

const App = () => (
    <div className="ui container comments">
        {Array.from({ length: NUM_COMMENTS }).map((_, i) => (
            <ApprovalCard>
                <CommentDetail
                    key={i}
                    avatar={image.avatar()}
                    author={name.firstName()}
                    timeAgo={date.past().toDateString()}
                    content={lorem.sentence()}
                />
            </ApprovalCard>
        ))}
    </div>
);

ReactDom.render(<App />, document.querySelector('#root'));
