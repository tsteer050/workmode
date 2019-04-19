export const fetchMessage = (id) => (
  $.ajax({
    method: 'get',
    url: `api/messages/${id}`
  })
);

export const fetchMessages = () => (
  $.ajax({
    method: 'get',
    url: 'api/messages'
  })
);

export const createMessage = (message) => (
  $.ajax({
    method: 'post',
    url: 'api/messages',
    data: { message }
  })
);

export const deleteMessage = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/messages/${id}`
  })
);