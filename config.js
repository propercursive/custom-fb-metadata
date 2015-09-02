module.exports = {
  port: 8080,
  app_id: process.env.APP_ID,
  redirect_url: process.env.REDIRECT,
  image_path: process.env.IMG_PATH,
  title: process.env.TITLE,
  filetype: '.png',
  width: 1200,
  height: 630,
  accepted_values: [
    'Lorem ipsum',
    'Et qui fugiat',
    'cupidatat',
    20,
    10
  ],
  description: function(params) {
    return 'Lorem ipsum Est Excepteur sit enim ' + params[0] + ' Lorem ipsum Ut dolore in ' + params[1] + '. Reprehenderit in veniam.' + params[2] + ' Lorem ipsum In non dolor. ' + params[3] + 'Eiusmod cillum eu.' + params[4] + 'Et ea nisi anim dolor.';
  }
};
