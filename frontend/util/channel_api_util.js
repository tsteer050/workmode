export const fetchChannel = (id) => (
  $.ajax({
    method: 'get',
    url: `api/channels/${id}`
  })
);

export const fetchChannels = () => (
  $.ajax({
    method: 'get',
    url: 'api/channels'
  })
);