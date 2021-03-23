// ˅
'use strict';

// ˄

export class HtmlWriter {
    // ˅
    
    // ˄

    writer;

    constructor(writer) {
        // ˅
        this.writer = writer;
        // ˄
    }

    // Write a title
    heading(title) {
        // ˅
        this.writer.write('<html>');
        this.writer.write('<head><title>' + title + '</title></head>');
        this.writer.write('<body>\n');
        this.writer.write('<h1>' + title + '</h1>\n');
        // ˄
    }

    // Write a paragraph
    paragraph(message) {
        // ˅
        this.writer.write('<p>' + message + '</p>\n');
        // ˄
    }

    // Write a mail address
    mailto(mailAddress, userName) {
        // ˅
        this.anchor('mailto:' + mailAddress, userName);
        // ˄
    }

    close() {
        // ˅
        this.writer.write('</body>');
        this.writer.write('</html>\n');
        this.writer.end();
        // ˄
    }

    // Write a link
    anchor(url, text) {
        // ˅
        this.paragraph('<a href="' + url + '">' + text + '</a>');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
