package tp.config;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/my-rest-api")
public class ApplicationConfig extends ResourceConfig {
public ApplicationConfig() {
// this call has the same effect as
// jersey.config.server.provider.packages
// in the web.xml: it scans that packages for resources and providers.
packages("tp.rest");
}

}
