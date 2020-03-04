import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions';

const buttonStyle = { marginRight: '7px' };

let Pagination = ({ getUsers, page, totalPages }) => {
  return (
    <div>
      {totalPages.map((p) => {
        if (p === page)
          return (
            <button key={p} style={buttonStyle} onClick={() => getUsers(p)}>
              <b>{p}</b>
            </button>
          );
        return (
          <button key={p} style={buttonStyle} onClick={() => getUsers(p)}>
            {p}
          </button>
        );
      })}
    </div>
  );
};

const mapDispatchToProps = {
  getUsers: getUsers,
};

const mapStateToProps = (state) => ({
  page: state.page,
  totalPages: state.totalPages,
});

Pagination = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export default Pagination;
