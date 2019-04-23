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

export const createDirectMessage = (channel, secondUserId) => (
  $.ajax({
    method: 'post',
    url: 'api/channels',
    data: { channel, secondUserId }
  })
);