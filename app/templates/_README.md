# [<%= site_url %>](<%= site_url %>)

### To run the server locally:
```
git clone <%= github_repo %>
```

### Install bundler
```
gem install bundler
rbenv rehash
```

### Jekyll
```
gem install jekyll
```

### Generate tags pages
```
ruby _gentags.rb
```

### Run Jekyll
```
bundle install
bundle exec jekyll serve
```

### Run the website
Open [http://127.0.0.1:4000](http://127.0.0.1:4000)
