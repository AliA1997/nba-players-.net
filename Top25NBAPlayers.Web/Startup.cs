using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session; 
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;
using Top25NBAPlayers.Data;
using Top25NBAPlayers.Data.Repositories;
using Top25NBAPlayers.Data.Repositories.Impl;
using Top25NBAPlayers.Services.Services;
using Top25NBAPlayers.Services.Services.Impl;
using Microsoft.AspNetCore.Http;

namespace Top25NBAPlayers.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = Configuration["ConnectionStrings:top25NBAPlayers"];

            services.AddDbContext<Top25NBAPlayersContext>(options => options.UseMySql(connectionString));

            //Inject your Repositories as Scoped context, which means that instance stands for the lifecycle of the http method.
            services.AddScoped<IPlayerRepo, PlayerRepo>();
            services.AddScoped<ITeamRepo, TeamRepo>();
            //Have your services have the same scoped context.
            services.AddScoped<IPlayerService, PlayerService>();
            services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IAccountService, AccountService>();
            //Have access to your IHttpCOntextAccessor interface and corresponding class by injecting it with a singleton scope.
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            //Using the Microsoft.AspNetCore.Session nuget package set your session your services during runtime.
            //Use distributed memory cache, or set up a in-memory session provider.
            //services.AddDistributedMemoryCache();

            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                              .AddSessionStateTempDataProvider();

            services.AddSession(o => {
                //Set a timeout 
                o.IdleTimeout = TimeSpan.FromSeconds(10);
                o.Cookie.HttpOnly = true;
                //Make session essential
                o.Cookie.IsEssential = true;
            });
        }

        //Pass your context as an argument so at runtime you would be able to seed data during runtime. Has access to method in the context class properties.
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, Top25NBAPlayersContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseSession();

            app.UseHttpsRedirection();

            app.UseCors(builder => builder.AllowAnyHeader()
                                           .AllowAnyMethod()
                                           .AllowAnyOrigin());

            app.UseMvc();
        }
    }
}
