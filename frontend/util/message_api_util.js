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