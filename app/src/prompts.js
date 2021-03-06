/**
*
*  Melionic
*  🐺 Melionic - A Yeoman static site and blog generator that helps you kickstart highly sophisticated Jekyll projects to evolve and upgrade every aspect of your Ruby development to the next moonshot. 
*
*  Copyright 2018 Reedia Limited. All rights reserved.
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*
*/
(function () {
  'use strict'
  /*  jslint nomen: true  */
  /*  jslint vars: true */
  /*  global require,process,module */

  var prompts = require('../prompts.json')

  module.exports = function (StaticGenerator) {
    /**
     * Ask all questions from prompts.json
     * Complete responses with templated answers
     */
    StaticGenerator.prototype.askQuestions = function askQuestions () {
      const prompt = this.prompt.bind(this)
      prompt(prompts, function (props) {
        this.siteVersion = props.siteVersion;
        this.siteTitle = props.siteTitle;
        this.siteDescription = props.siteDescription;
        this.siteKeywords = props.siteKeywords;
        this.siteUrl = props.siteUrl;
        this.siteAuthor = props.siteAuthor;
        this.siteEmail = props.siteEmail;
        this.twitterUsername = props.twitterUsername;
        this.disqusId = props.disqusId;
        this.addthisPubId = props.addthisPubId;
        this.gaTrackingId = props.gaTrackingId;
        this.gaSuperProxyUrl = props.gaSuperProxyUrl;
        this.githubRepo = props.githubRepo;
        this.feedbackUrl = props.feedbackUrl;
      }.bind(this))
    }
  }
}())
