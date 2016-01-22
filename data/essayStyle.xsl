<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="4.01" indent="yes"/>
    <xsl:output doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
    <xsl:output doctype-public="-//W3C//DTD HTML 4.01//EN"/>    
    
    <xsl:template match="/TEI/text">
        <xsl:apply-templates select="figure" />
    </xsl:template>
    <xsl:template match="figure">
    ++ Found a figure ++
</xsl:template>
</xsl:stylesheet>