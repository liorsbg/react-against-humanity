import * as TransportActions from '../action/transport';

// This should be ignored by the server.
export default function transport(state = {
  status: 'pending'
}, action) {
  const { type, payload, meta, error } = action;
  if (error) return state;
  // If connection is not -1, the action should be ignored.
  if (meta && meta.connection != null && meta.connection !== -1) return state;
  switch (type) {
  case TransportActions.OPEN:
    return Object.assign({}, state, {
      status: 'connected'
    });
  case TransportActions.CLOSE:
    return Object.assign({}, state, {
      status: 'disconnected',
      error: payload.code
    });
  case TransportActions.ERROR:
    return Object.assign({}, state, {
      status: 'disconnected',
      error: payload.error && payload.error.message
    });
  }
  return state;
}
