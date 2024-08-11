import{_ as a,c as e,o as r,a6 as t}from"./chunks/framework.Dy27xm6B.js";const j=JSON.parse('{"title":"Integrations","description":"","frontmatter":{},"headers":[],"relativePath":"integrations.md","filePath":"integrations.md","lastUpdated":null}'),o={name:"integrations.md"},s=t('<h1 id="integrations" tabindex="-1">Integrations <a class="header-anchor" href="#integrations" aria-label="Permalink to &quot;Integrations&quot;">​</a></h1><h2 id="rasters-jl" tabindex="-1">Rasters.jl <a class="header-anchor" href="#rasters-jl" aria-label="Permalink to &quot;Rasters.jl&quot;">​</a></h2><p><a href="https://rafaqz.github.io/Rasters.jl/stable" target="_blank" rel="noreferrer">Rasters.jl</a> extends DD for geospatial data manipulation, providing file load/save for a wide range of raster data sources and common GIS tools like polygon rasterization and masking. <code>Raster</code> types are aware of <code>crs</code> and their <code>missingval</code> (which is often not <code>missing</code> for performance and storage reasons).</p><p>Rasters.jl is also the reason DimensionalData.jl exists at all! But it always made sense to separate out spatial indexing from GIS tools and dependencies.</p><p>A <code>Raster</code> is a <code>AbstractDimArray</code>, a <code>RasterStack</code> is a <code>AbstractDimStack</code>, and <code>Projected</code> and <code>Mapped</code> are <code>AbstractSample</code> lookups.</p><h2 id="yaxarrays-jl" tabindex="-1">YAXArrays.jl <a class="header-anchor" href="#yaxarrays-jl" aria-label="Permalink to &quot;YAXArrays.jl&quot;">​</a></h2><p><a href="https://juliadatacubes.github.io/YAXArrays.jl/dev/" target="_blank" rel="noreferrer">YAXArrays.jl</a> is another spatial data package aimed more at (very) large datasets. It&#39;s functionality is slowly converging with Rasters.jl (both wrapping DiskArray.jl/DimensionalData.jl) and we work closely with the developers.</p><p><code>YAXArray</code> is a <code>AbstractDimArray</code> and inherits its behaviours.</p><h2 id="climatebase-jl" tabindex="-1">ClimateBase.jl <a class="header-anchor" href="#climatebase-jl" aria-label="Permalink to &quot;ClimateBase.jl&quot;">​</a></h2><p><a href="https://juliaclimate.github.io/ClimateBase.jl/dev/" target="_blank" rel="noreferrer">ClimateBase.jl</a> Extends DD with methods for analysis of climate data.</p><h2 id="arviz-jl" tabindex="-1">ArviZ.jl <a class="header-anchor" href="#arviz-jl" aria-label="Permalink to &quot;ArviZ.jl&quot;">​</a></h2><p><a href="https://arviz-devs.github.io/ArviZ.jl/dev/" target="_blank" rel="noreferrer">ArviZ.jl</a> Is a Julia package for exploratory analysis of Bayesian models.</p><p>An <code>ArviZ.Dataset</code> is an <code>AbstractDimStack</code>!</p><h2 id="jump-jl" tabindex="-1">JuMP.jl <a class="header-anchor" href="#jump-jl" aria-label="Permalink to &quot;JuMP.jl&quot;">​</a></h2><p><a href="https://jump.dev/" target="_blank" rel="noreferrer">JuMP.jl</a> is a powerful optimization DSL. It defines its own named array types but now accepts any <code>AbstractDimArray</code> too, through a package extension.</p><h2 id="cryogrid-jl" tabindex="-1">CryoGrid.jl <a class="header-anchor" href="#cryogrid-jl" aria-label="Permalink to &quot;CryoGrid.jl&quot;">​</a></h2><p><a href="https://juliahub.com/ui/Packages/General/CryoGrid" target="_blank" rel="noreferrer">CryoGrid.jl</a> A Julia implementation of the CryoGrid permafrost model.</p><p><code>CryoGridOutput</code> uses <code>DimArray</code> for views into output data.</p><h2 id="dynamicgrids-jl" tabindex="-1">DynamicGrids.jl <a class="header-anchor" href="#dynamicgrids-jl" aria-label="Permalink to &quot;DynamicGrids.jl&quot;">​</a></h2><p><a href="https://github.com/cesaraustralia/DynamicGrids.jl" target="_blank" rel="noreferrer">DynamicGrids.jl</a> is a spatial simulation engine, for cellular automata and spatial process models.</p><p>All DynamicGrids.jl <code>Outputs</code> are <code>&lt;: AbstractDimArray</code>, and <code>AbstractDimArray</code> are used for auxiliary data to allow temporal synchronisation during simulations. Notably, this all works on GPUs!</p><h2 id="astroimages-jl" tabindex="-1">AstroImages.jl <a class="header-anchor" href="#astroimages-jl" aria-label="Permalink to &quot;AstroImages.jl&quot;">​</a></h2><p><a href="http://juliaastro.org/dev/modules/AstroImages" target="_blank" rel="noreferrer">AstroImages.jl</a> Provides tools to load and visualise astronomical images. <code>AstroImage</code> is <code>&lt;: AbstractDimArray</code>.</p><h2 id="timeseriestools-jl" tabindex="-1">TimeseriesTools.jl <a class="header-anchor" href="#timeseriestools-jl" aria-label="Permalink to &quot;TimeseriesTools.jl&quot;">​</a></h2><p><a href="https://juliahub.com/ui/Packages/General/TimeseriesTools" target="_blank" rel="noreferrer">TimeseriesTools.jl</a> Uses <code>DimArray</code> for time-series data.</p>',25),i=[s];function l(n,d,c,h,m,p){return r(),e("div",null,i)}const f=a(o,[["render",l]]);export{j as __pageData,f as default};
