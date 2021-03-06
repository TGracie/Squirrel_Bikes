const PubSub = {
  publish: function(channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload,
    });
    console.log(`${payload} published on:${channel}`);
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback) {
    document.addEventListener(channel, callback);
  },
};

module.exports = PubSub;
